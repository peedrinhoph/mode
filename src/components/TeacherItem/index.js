import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/53953087?s=460&u=ed9e5552f09e69681378c1141c668c821b55f447&v=4" alt="Avatar" />
                <div>
                    <strong>PEdro Pereira</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                <br /><br />
            Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.
            </p>

            <footer>
                <p>
                    Preço/Hora
                <strong>R$ 80.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whats" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;