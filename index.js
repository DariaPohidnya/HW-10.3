let contactBook = {
    contacts:[
        { name: "Даша", phone: "380-000-00-00", email: "daria@gmail.com" },
        { name: "Єва", phone: "380-000-00-00", email: "yeva@gmail.com" }
    ],

    findContack(name) {
        return this.contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()) 
        || `Контакт із ім'ям "${name}" не знайдено`;
    },

    addContact(newContact) {
        if (this.contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())){
            return `Контакт із ім'ям "${newContact.name}" вже існує.`;
        }
        this.contacts.push(newContact);
        return `Контакт із ім'ям "${newContact.name}" успішно додано.`;
    }
};

console.log(contactBook.findContact("Марія"));

console.log(contactBook.addContact({ name: "Іван", phone: "380-000-00-00", email: "ivan@gmail.com" }));

console.log(contactBook.findContack("Іван"));

console.log(contactBook.addContact({ name: "Іван", phone: "380-000-00-00", email: "ivan@gmail.com" }));

