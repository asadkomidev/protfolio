import { revalidatePath } from "next/cache";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { ContactList } from "@/types/contact";

export async function createContact(contact:ContactList) {

    const currentDate = new Date().toISOString();
  const { fullname, email, message } = contact;
    const data = {
      _type: 'contact',
      fullname,
      email,
      message,
      createdAt: currentDate,
    };
  
    // Use the client to create a new document in the 'contact' collection
    const response = await client.create(data).catch((error) => {
      console.error('Error creating contact:', error.message);
      throw new Error('Failed to create contact');
    });
  
    return response;
  }