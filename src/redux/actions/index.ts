export const AddCurrencies = (data: any) => {
    return {
        type: 'ADD_CURRENCY',
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const RemoveCurrencies = (id: string) => {
    return {
        type: 'REMOVE_CURRENCY',
        payload: {
            id: id
        }
    }
}