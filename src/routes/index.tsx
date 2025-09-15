// import { createFileRoute} from "@tanstack/react-router";
// export const Route=createFileRoute('/')({
//     component:()=><h1>Hola Bienvenido a inicio</h1>
// })
import { createFileRoute } from "@tanstack/react-router";
// import '../styles/_base.scss'
import App from "../App";
export const Route = createFileRoute("/")({
  component: App,
});