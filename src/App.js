import { ContactForm } from './components/ContactForm/ContactForm';
import {Filter} from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import './App.css';

export const App = () => {
    return (
        <div className='App'>
            <div className='container'>
                <div className='group'>
                    <ContactForm>
                        <div className='list'>
                            
                        </div>
                    </ContactForm>
                    <Filter></Filter>
                </div>
                <ContactList></ContactList>
            </div>
        </div>
    );
};

export default App;