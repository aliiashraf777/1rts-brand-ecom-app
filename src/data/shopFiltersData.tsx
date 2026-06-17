export interface filterBrandItem {
    id: string,
    brand: string,
}

export interface filterFeaturesItem {
    id: string,
    feature: string
}

export interface filterConditionItem {
    id: string,
    condition: string,
}

export interface filterRatingsItem {
    id: string,
    rating: number,
}

export interface IfilterOption {
    id: string,
    label?: string,
    rating?: number,
    sortKey?: 'SelectSort' | 'featured' | 'bestSellers' | 'new' | 'old' | 'priceLowToHigh' | 'priceHighToLow'
}

// export const filterBrandsData: filterBrandItem[] = [
export const filterBrandsData: IfilterOption[] = [
    {
        id: 'brand0',
        label: 'samsung',
    },
    {
        id: 'brand1',
        label: 'apple',
    },
    {
        id: 'brand2',
        label: 'huawei',
    },
    {
        id: 'brand3',
        label: 'pocco',
    },
    {
        id: 'brand4',
        label: 'lenovo',
    },
]

// export const filterFeaturesData: filterFeaturesItem[] = [
export const filterFeaturesData: IfilterOption[] = [
    {
        id: 'feature0',
        label: 'Metalic',
    },
    {
        id: 'feature1',
        label: 'Plastic cover',
    },
    {
        id: 'feature2',
        label: '8GB Ram',
    },
    {
        id: 'feature3',
        label: 'Super power',
    },
    {
        id: 'feature4',
        label: 'Large memory',
    },
]

// export const filterConditionData: filterConditionItem[] = [
export const filterConditionData: IfilterOption[] = [
    {
        id: 'condition0',
        label: 'Any',
    },
    {
        id: 'condition1',
        label: 'Refurbished',
    },
    {
        id: 'condition2',
        label: 'Brand new',
    },
    {
        id: 'condition3',
        label: 'Old items',
    },
]

// export const filterRatingsData: filterRatingsItem[] = [
export const filterRatingsData: IfilterOption[] = [
    {
        id: 'rating0',
        rating: 5,
    },
    {
        id: 'rating1',
        rating: 4,
    },
    {
        id: 'rating2',
        rating: 3,
    },
    {
        id: 'rating3',
        rating: 2,
    },
]

export const filterVerifiedData: IfilterOption[] = [
    {
        id: 'verified0',
        label: 'Verified only',
    }
]

export const sortTopData: IfilterOption[] = [
    {
        id: 'sort00',
        label: 'Select sort',
        sortKey: 'SelectSort'
    },
    {
        id: 'sort0',
        label: 'Featured',
        sortKey: 'featured'
    },
    {
        id: 'sort1',
        label: 'Best seller',
        sortKey: 'bestSellers'
    },
    {
        id: 'sort2',
        label: 'New',
        sortKey: 'new'
    },
    {
        id: 'sort3',
        label: 'Old',
        sortKey: 'old'
    },
    {
        id: 'sort4',
        label: 'Price low to high',
        sortKey: 'priceLowToHigh'
    },
    {
        id: 'sort5',
        label: 'Price high to low',
        sortKey: 'priceHighToLow'
    },
]