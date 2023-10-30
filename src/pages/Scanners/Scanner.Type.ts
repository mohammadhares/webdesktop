export type ScannerState = {
    scanner:{
        section: string
    }
}

export const ScannerStatus = {
    active: '&#128994;'
}

export type ScannerUpdateItem = {
    scanner: string , 
    name: string,
    version: number ,
    status : string
}

export type ScannerNavbarProps = {
    scannerType: string
    setScannerType: (value : string) => void
}


export type ScannerUpdateFormProps = {
    directory: string
    onUpdateDirectory: (value : string) => void
    patch: string 
    scannerType: string
    onUpdatePatch: (value : string ) => void
    onScan: () => void 
}

export type ScannerUpdateTableProps = {
    scannerType: string
    data : any 
    isSuccess: boolean
    isLoading: boolean
    isError: boolean
}


export type ScannerDetails = {
    item : {
        id: number , 
        name: string,
        version: number ,
        status : string
    }
}

export type ScannerListProps = {
    value : string
    onChange : (value : string) => void
}

export type ScannerUpdateData = {
    item : ScannerUpdateItem,
    key: number
}

export type Targets = {
    name: string,
    target: string
}