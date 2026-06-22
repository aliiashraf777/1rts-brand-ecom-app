import { Link, useMatches } from "react-router"
import SectionContainer from "../common/section/SectionContainer"
import { ChevronRight } from "lucide-react"
import type { breadCrumbItemTy } from "@/pages/shop/Shop"

type Props = {
    breadCrumbItems: breadCrumbItemTy[],
}

const BreadCrumb = ({ breadCrumbItems }: Props) => {
    return (
        <SectionContainer className="py-section text-gray-500">
            <nav aria-label="breadcrumb">
                <ol className="flex items-center flex-wrap gap-2 text-gray-500">
                    {breadCrumbItems?.map((item, idx) => {
                        const isLastItem = breadCrumbItems.length - 1 === idx;

                        return (
                            <li
                                key={item?.id}
                                className="flex items-center gap-2"
                            >
                                {isLastItem
                                    ?
                                    <span
                                        aria-current="page"
                                        className="text-gray-700"
                                    >
                                        {item.label}
                                    </span>
                                    :
                                    <Link
                                        to={item?.link}
                                        className="transition-all duration-300 ease-out hover:text-primary"
                                    >
                                        {item?.label}
                                    </Link>
                                }

                                {!isLastItem && (
                                    <ChevronRight
                                        className="w-4 h-4"
                                    />
                                )}
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </SectionContainer>
    )
}

export default BreadCrumb


// dynamic data router based breadcrumb
type CrumbMatchTy = {
    pathname: string,
    handle?: { crumb?: (data: unknown) => React.ReactNode },
    data?: unknown
}

export const DynamicBreadCrumb = () => {

    const matchedHandles = useMatches() as CrumbMatchTy[]

    const crumbsHandle = matchedHandles
        .filter((m) => Boolean(m.handle?.crumb))
        .map((m) => ({
            pathname: m.pathname,
            label: m.handle!.crumb!(m.data),
        }));

    return (
        <SectionContainer className="py-section text-gray-500">
            <nav aria-label="breadcrumb">
                <ol className="flex items-center gap-2 flex-wrap text-gray-500 transition-all duration-300 ease-out">
                    <li>
                        <Link to={"/"} className="hover:text-primary">
                            Home
                        </Link>
                    </li>

                    {crumbsHandle.map((item, idx) => {
                        const isLastItem = idx === crumbsHandle.length - 1

                        return (
                            <li
                                key={item.pathname}
                                className="flex items-center gap-2"
                            >
                                <ChevronRight className="w-4 h-4" />
                                {isLastItem
                                    ?
                                    <span
                                        aria-current="page"
                                        className="text-gray-700">
                                        {item.label}
                                    </span>
                                    :
                                    <Link
                                        to={item.pathname}
                                        className="hover:text-primary"
                                    >
                                        {item.label}
                                    </Link>
                                }
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </SectionContainer>

    )
}