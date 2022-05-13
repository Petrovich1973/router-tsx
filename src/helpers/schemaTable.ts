import {ISchemeRow} from '../interfaces'

const getStatus = (value: number) => {
    switch (value) {
        case 1:
            return 'не обработан'
        case 2:
            return 'обрабатывается'
        case 3:
            return 'ошибка'
        case 4:
            return 'готово'
        case 5:
            return 'удален'
        default:
            return 'не распознан'
    }
}

const scheme: Array<ISchemeRow> = [
    {id: 1, association: 'name', label: 'Имя', handler: (value: string) => value},
    {id: 2, association: 'age', label: 'Возраст', handler: (value: number) => value},
    {id: 3, association: 'gender', label: 'Пол', handler: (value: boolean) => value ? 'male' : 'female'},
    {id: 4, association: 'status', label: 'Статус', handler: (value: number) => getStatus(value)}
]

export default scheme
