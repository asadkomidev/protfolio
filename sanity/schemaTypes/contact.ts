// contact.js

const contact = {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
      {
        name: 'fullname',
        title: 'Full Name',
        type: 'string',
        validation:( Rule:any )=> Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: ( Rule:any ) => Rule.required().email(),
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
        validation: ( Rule:any ) => Rule.required(),
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DDTHH:mm:ssZ',
        },
        readOnly: true,
      },
    ],
    initialValue: {
      createdAt: new Date().toISOString(),
    },
  };
  
  export default contact;
  