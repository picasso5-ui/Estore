import { defineConfig } from "sanity";
import {structureTool} from "sanity/structure"
import schemas from './sanity/schemas'


 export default defineConfig({
 
  projectId:"b2k6fbvr",
  dataset:"production",
  apiVersion:"2024-03-04",
  useCdn:true,
  basePath:"/admin",
  plugins:[
    structureTool()
  ],
  schema:{types:schemas},
})

