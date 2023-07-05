import { FormTitle,FormContact,FormButton} from "./ContactForm.Styled"
export const ContactForm = ({number,name,addContacts,addFormNameTel}) => {
    return ( 
        <>
         <FormTitle>PhoneBook</FormTitle>
        <FormContact onSubmit={addContacts}>
          <label>
            Name
            <input
              onChange={addFormNameTel}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
          Tel:
            <input
              onChange={addFormNameTel}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <FormButton type="submit">Add contact</FormButton>
        </FormContact>
        </>
    )
}