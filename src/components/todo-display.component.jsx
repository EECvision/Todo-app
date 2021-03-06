import { useContext } from 'react';
import TodoMenu from './todo-menu.component';
import bgDesktopDark from '../assets/images/bg-desktop-dark.jpg';
import bgDesktopLight from '../assets/images/bg-desktop-light.jpg';
import { ThemeContext } from './theme-context';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { isTouchDevice } from "./utils";

const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend;

const TodoDisplay =()=>{
    const {toggleTheme} = useContext(ThemeContext);
    return(
        <div className="relative w-full flex flex-col items-center justify-start">
            <div 
                style={{backgroundImage: `url(${!toggleTheme ? bgDesktopDark : bgDesktopLight})`, height:'18rem'}} 
                className="w-screen h-64 bg-cover bg-center bg-no-repeat"
            />  
            <DndProvider backend={backendForDND}>
                <TodoMenu/>    
            </DndProvider>
        </div>
    )    
}
export default TodoDisplay;