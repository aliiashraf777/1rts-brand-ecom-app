export interface filterBrandItem {
    brand: string,
}

export interface filterFeaturesItem {
    feature: string
}

export interface filterConditionItem {
    condition: string,
}

export const filterBrandsData: filterBrandItem[] = [
    { brand: 'samsung' },
    { brand: 'apple' },
    { brand: 'huawei' },
    { brand: 'pocco' },
    { brand: 'lenovo' },
]

export const filterFeaturesData: filterFeaturesItem[] = [
    { feature: 'Metalic' },
    { feature: 'Plastic cover' },
    { feature: '8GB Ram' },
    { feature: 'Super power' },
    { feature: 'Large memory' },
]

export const filterConditionData: filterConditionItem[] = [
    { condition: 'Any' },
    { condition: 'Refubished' },
    { condition: 'Brand new' },
    { condition: 'Old items' },
]

export const filterRatingsData = [
    { rating: 5 },
    { rating: 4 },
    { rating: 3 },
    { rating: 2 },
]