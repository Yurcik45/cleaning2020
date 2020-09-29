import React, {useState} from 'react';
import './MainPage.sass'
import { cullSVG1, cullSVG2, cullSVG3, cullSVG4, fundSVG1, fundSVG2, fundSVG3, fundSVG4, checkBenefits, quality, price, good} from '../iconsConfig'
import Header from "../Header/Header";
import Instagram from '../../IMG/SVG/instagram.png'
import Telegram from '../../IMG/SVG/telegram.png'
import Viber from '../../IMG/SVG/viber.png'
import Gmail from '../../IMG/SVG/gmail.png'
import Facebook from '../../IMG/SVG/facebook.png'
import Funtik from '../../IMG/MainIMG/Funtik.png'
import {HashLink as Link} from 'react-router-hash-link'


const MainPage = props => {
    const [scroll, setScroll] = useState(null)
    window.addEventListener('scroll', () => {setScroll(window.scrollY.valueOf())});
    const date = new Date()

return (
    <div className='AppContainer'>

        {/*____Main Display Container____*/}
        <div className='MainDisplayContainer'>
            <Header
                scroll={scroll}
            />
            <div className='mainText'>
                <h1>Easy <p> Cleaning </p> & <p> Home </p> <p> Service </p> Here</h1>
            </div>
            <div className='mainButton'>
                <button><Link to='/#preority'><p>GET STARTED</p></Link></button>
            </div>
        </div>
        {/*____End Of Main Display Container____*/}


        {/*____Preority Container____*/}
        <div className='preorityContainer'>
            <div className='preorityItem'>
                <div className='preoritySvg'>
                    {fundSVG1}
                    {cullSVG1}
                </div>
                <div className='preorityDescription'>
                    <p>Миття вікон</p>
                </div>
            </div>
            <div className='preorityItem'>
                <div className='preoritySvg'>
                    {fundSVG2}
                    {cullSVG2}
                </div>
                <div className='preorityDescription'>
                    <p>Прибирання квартир, будинків та офісних приміщень</p>
                </div>
            </div>
            <div className='preorityItem'>
                <div className='preoritySvg'>
                    {fundSVG3}
                    {cullSVG3}
                </div>
                <div className='preorityDescription'>
                    <p>Прибирання після ремонту</p>
                </div>
            </div>
            <div className='preorityItem'>
                <div className='preoritySvg'>
                    {fundSVG4}
                    {cullSVG4}
                </div>
                <div className='preorityDescription'>
                    <p>Генеральне прибирання</p>
                </div>
            </div>
        </div>
        {/*____End Of Preority Container____*/}


        {/*____Of Us Container____*/}
        <div className='topAboutContainer'>
            <div className='aboutAvatar'>
                <img src={Funtik} alt="image will be here"/>
            </div>
            <div className='aboutTextContainer'>
                <div className='aboutHead'>
                    <p>Чому обирають нас ?</p>
                </div>
                <div className='aboutText'>
                    <h4>З нами чесно і чисто !!!</h4>
                    <p>Після прибирання нас совість не гризе, що щось пропустили або десь там зхалтурили, ні, бо ми <br/> працюємо для хороших людей як для себе! <br/> Хочете переконатись - тоді телефонуйте до нас, замовляйте прибирання та оцінюйте результат :)
                    </p>
                </div>
            </div>
        </div>
        {/*____End Of Of Us Container____*/}


        {/*____Benefits Container____*/}
        <div className='benefitsContainer'>
            <div className='benefitsHeader'>
                <p>Наші переваги</p>
            </div>
            <div className='benefitsItemsContainer'>
                <div>
                    <div className='benefitsItems'>
                        <div className='benefitsSVG'>
                            {checkBenefits}
                        </div>
                        <div className='benefitsText'>
                            <p>Прибирання всіх видів приміщень</p>
                        </div>
                    </div>
                    <div className='benefitsItems'>
                        <div className='benefitsSVG'>
                            {checkBenefits}
                        </div>
                        <div className='benefitsText'>
                            <p>Індивідуальний підхід до кожного замовлення</p>
                        </div>
                    </div>
                    <div className='benefitsItems'>
                        <div className='benefitsSVG'>
                            {checkBenefits}
                        </div>
                        <div className='benefitsText'>
                            <p>Гарантуємо Вам якісну, доступну та швидко виконану роботу 99,9%</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='benefitsItems'>
                        <div className='benefitsSVG'>
                            {checkBenefits}
                        </div>
                        <div className='benefitsText'>
                            <p>Працюємо зі всім своїм</p>
                        </div>
                    </div>
                    <div className='benefitsItems'>
                        <div className='benefitsSVG'>
                            {checkBenefits}
                        </div>
                        <div className='benefitsText'>
                            <p>Працюємо виключно за попередньою оцінкою об’єкта</p>
                        </div>
                    </div>
                    <div className='benefitsItems'>
                        <div className='benefitsSVG'>
                            {checkBenefits}
                        </div>
                        <div className='benefitsText'>
                            <p>Доступні та адекватні ціни</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*____End Of Benefits Container____*/}


        {/*____About Container____*/}
        <div className='bottomAboutContainer'>
            <div className='bottomHead'><p>Ми Обіцяємо Вам</p></div>
            <div className='bottomIconsContainer'>
                <div className='bottomIcon'>
                    <div className='bottomSVG'>{quality}</div>
                    <div className='bottomSvgName'>
                        <p>Професійну Якість</p>
                    </div>
                </div>
                <div className='bottomIcon'>
                    <div className='bottomSVG'>{price}</div>
                    <div className='bottomSvgName'>
                        <p>Розумну Ціну</p>
                    </div>
                </div>
                <div className='bottomIcon'>
                    <div className='bottomSVG'>{good}</div>
                    <div className='bottomSvgName'>
                        <p>100% Задоволення</p>
                    </div>
                </div>
            </div>
            <div className='bottomText'><p>Тут ще можна додати якийсь текст але я не мав з чого його брати, нажаль :) І доречі його має бути десь на дві сторчечки бо так виглдає тоді краще ніж би тут була одна </p></div>
        </div>
        {/*___End of_About Container____*/}


        {/*____Test Table Container____*/}
        <div className="telephonesTable">
            <div className='headOfPrice'>
                <p>Price</p>
            </div>
            <div className="telephonesTableHeader">
                <div className='DivHeaderL'><p>Назва послуги</p></div>
                <div className='DivHeaderR'><p>Ціна</p></div>
            </div>
            {
                props.data?.priceArray ?
                    props.data.priceArray.map( (item, id) => {
                        return (
                            <div key={id} className="telephonesTableBody">
                                <div
                                    className={item.doubleClass === '0' ? 'DivBodyL' : 'DivBodyL grey' }>
                                    <p>{item.serviceName}</p>
                                </div>
                                <div
                                    className={item.doubleClass === '0' ? 'DivBodyR' : 'DivBodyR grey' }>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        )
                    })
                : null
            }
        </div>
        {/*____End Of Test Table Container____*/}


        {/*____Test Gallery Container____*/}
        <div className='galleryContainer'>
            <div className='headOfGallery'>
                <p>Gallery</p>
            </div>

            {
                props.data?.imagesArray ?
                    props.data.imagesArray.map((item, index) => {
                        return (
                            <div key={index} className='imageContainer'>
                                <img src={require(`../../IMG/Gallery/${item.img}`)} alt={'working images'}/>
                            </div>
                        )
                    })
                    : null
            }
        </div>
        {/*____End Of Gallery Container____*/}


        {/*____Contacts Container____*/}
        <div className='contactsContainer'>
            <div className='contactsHead'>
                <p>Контактна інформація</p>
            </div>







            <div className='topContactsContainer'>


                <div className='topNumbersContainer'>

                    <div className='numbersHeader'>
                        <p>Ви можете зателефонувати :</p>
                    </div>

                    <div className='numbersContainer'>
                        <div className='number'><p>+380 (50) 375 69 64</p></div>
                        <div className='number'><p>+380 (50) 375 69 64</p></div>
                    </div>

                </div>



                <div className='topNumbersContainer'>

                    <div className='numbersHeader'>
                        <p>Або написати нам :</p>
                    </div>

                    <div className='numbersContainer'>
                        <div className='number'><p>youGmailHere@gmail.com</p></div>
                    </div>

                </div>

            </div>

            <div className='bottomContacts'>
                <div className='leftBottomContacts'>
                    <h4>Графік роботи:</h4>
                    <p>З 09:00 до 19:30</p>
                    <p>Без вихідних</p>
                </div>
                <div className='rightBottomContacts'>
                    <div className='socialIconHeader'><p>Долучайтесь до нас в соціальних мережах</p></div>
                    <div className='socialIconsContainer'>
                        <div className='socialIcon'>
                            <img src={Instagram} alt=""/>
                        </div>
                        <div className='socialIcon'>
                            <img src={Facebook} alt=""/>
                        </div>
                        <div className='socialIcon'>
                            <img src={Telegram} alt=""/>
                        </div>
                        <div className='socialIcon'>
                            <img src={Viber} alt=""/>
                        </div>
                        <div className='socialIcon'>
                            <img src={Gmail} alt=""/>
                            <p>youGmailHere@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*____End Of Contacts Container____*/}


        <footer>
            <div className="up">
                <Link to={ '/#home' }>
                    <p>&#169; ClEANING 2020 .com </p>
                </Link>
            </div>
            <div className="down">
                <p> { date.getUTCFullYear() } { '0' + date.getUTCMonth() } { date.getDate() } </p>
            </div>
        </footer>
    </div>
    )
};
export default MainPage;