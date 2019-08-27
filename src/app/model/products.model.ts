export interface NameTranslations {
    de: string;
    en: string;
    fr: string;
    it: string;
}

export interface DisplayNameTranslations {
    de: string;
    fr: string;
    it: string;
    en: string;
}

export interface IngredientsTranslations {
    de: string;
    en: string;
    fr: string;
    it: string;
}

export interface OriginTranslations {
    de: string;
    en: string;
    fr: string;
    it: string;
}

export interface Image {
    categories: string[];
    thumb: string;
    medium: string;
    large: string;
    xlarge: string;
}

export interface NameTranslations2 {
    de: string;
    en: string;
    fr: string;
    it: string;
}

export interface Protein {
    name_translations: NameTranslations2;
    unit: string;
    per_hundred: number;
    per_portion?: number;
    per_day?: number;
}

export interface NameTranslations3 {
    de: string;
    en: string;
    fr: string;
    it: string;
}

export interface Carbohydrates {
    name_translations: NameTranslations3;
    unit: string;
    per_hundred: number;
    per_portion?: number;
    per_day?: number;
}

export interface NameTranslations4 {
    de: string;
    en: string;
    fr: string;
    it: string;
}

export interface Fat {
    name_translations: NameTranslations4;
    unit: string;
    per_hundred: number;
    per_portion?: number;
    per_day?: number;
}

export interface NameTranslations5 {
    de: string;
    en: string;
    fr: string;
    it: string;
}

export interface EnergyKcal {
    name_translations: NameTranslations5;
    unit: string;
    per_hundred: number;
    per_portion?: number;
    per_day?: number;
}

export interface NameTranslations6 {
    de: string;
    en: string;
    fr: string;
    it: string;
}

export interface Energy {
    name_translations: NameTranslations6;
    unit: string;
    per_hundred: number;
    per_portion?: number;
    per_day?: number;
}

export interface NameTranslations7 {
    de: string;
    en: string;
    fr: string;
    it: string;
}

export interface Sodium {
    name_translations: NameTranslations7;
    unit: string;
    per_hundred: number;
    per_portion?: any;
    per_day?: any;
}

export interface NameTranslations8 {
    de: string;
    en: string;
    fr: string;
    it: string;
}

export interface Salt {
    name_translations: NameTranslations8;
    unit: string;
    per_hundred: number;
    per_portion?: number;
    per_day?: number;
}

export interface NameTranslations9 {
    de: string;
    en: string;
    fr: string;
    it: string;
}

export interface Fiber {
    name_translations: NameTranslations9;
    unit: string;
    per_hundred: number;
    per_portion?: number;
    per_day?: number;
}

export interface NameTranslations10 {
    de: string;
    en: string;
    fr: string;
    it: string;
}

export interface Sugars {
    name_translations: NameTranslations10;
    unit: string;
    per_hundred: number;
    per_portion?: number;
    per_day?: number;
}

export interface NameTranslations11 {
    de: string;
    en: string;
    fr: string;
    it: string;
}

export interface SaturatedFat {
    name_translations: NameTranslations11;
    unit: string;
    per_hundred: number;
    per_portion?: number;
    per_day?: number;
}

export interface Nutrients {
    protein: Protein;
    carbohydrates: Carbohydrates;
    fat: Fat;
    energy_kcal: EnergyKcal;
    energy: Energy;
    sodium: Sodium;
    salt: Salt;
    fiber: Fiber;
    sugars: Sugars;
    saturated_fat: SaturatedFat;
}

export interface Product {
    id: number;
    country: string;
    barcode: string;
    name_translations: NameTranslations;
    display_name_translations: DisplayNameTranslations;
    ingredients_translations: IngredientsTranslations;
    origin_translations: OriginTranslations;
    status: string;
    quantity: number;
    unit: string;
    portion_quantity: number;
    portion_unit: string;
    alcohol_by_volume: number;
    images: Image[];
    nutrients: Nutrients;
    created_at: Date;
    updated_at: Date;
}

export interface Links {
    self: string;
    next: string;
    last: string;
}

export interface Meta {
    api_version: string;
    generated_in: number;
}

export interface Pager {
    currentpage: number;
    totalItems: number;
    pageSize: number;
    totalPages: number;
    startPage: number;
    endPage: number;
    pages: number[];
}

export class RootObject {
    constructor(
    public data: Product[],
    public links: Links,
    public meta: Meta,
    public pager: Pager
    ) {}
}
