import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import post from "./schemaTypes/post";
import author from "./schemaTypes/author";
import technology from "./schemaTypes/technology";
import project from "./schemaTypes/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, technology, project],
};
