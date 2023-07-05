import { nanoid } from 'nanoid';
import{ContactListBtn,ContactListUl} from './ContactList.Styled'
export const ContactList = ({contacts,deleteContact}) => {
    return (
        <>
            <ContactListUl>
          {contacts.map(e => {
            return (
              <li key={nanoid()}>
                {e.name} : {e.number}
                <ContactListBtn onClick={deleteContact} type='button'>delete</ContactListBtn>
              </li>
            );
          })}
        </ContactListUl>
        </>
    )
}