import {PrizeLogger} from "./InterfacePrizeLogger";

enum Category{
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster
}

interface Worker{
    id: number
    Name: string
    surname: string
    available: boolean
    salary: number
    Category: string
    _markPrize?: PrizeLogger
}

export {Worker, Category}