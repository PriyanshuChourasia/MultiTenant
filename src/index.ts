import { loadServer } from "@server/index";
import { dbConnect } from "./config/database";

// This is help to start express application
loadServer();
dbConnect();