import {FilterLabel,FilterTitle} from './ContactListFilter.Styled'
export const ContactListFilter = ({setFilter,filter}) => {
    return (
        <>
        <FilterTitle>Contacts</FilterTitle>
        <FilterLabel>
          Find contacts by name
          <input
            onChange={setFilter}
            type="text"
            name="filter"
            value={filter}
          />
        </FilterLabel>
        </>
    )
}