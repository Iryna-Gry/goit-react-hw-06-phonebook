import React, { useEffect } from 'react';
import { Container } from './container/Container.styled';
import { Section } from './Section/Section';
import { ContactList } from './contactList/ContactList';
import { Form } from './form/Form';
import { SearchInput } from './searchInput/SearchInput';
import { getLocalStorageData } from './services/getLocalStorageData';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Section title="Add contact" className="aside">
        <Form />
      </Section>

      <Section title="Contact List">
        <SearchInput />
        <ContactList />
      </Section>
    </Container>
  );
};
