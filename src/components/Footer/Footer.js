import React, {Component} from 'react';

class Footer extends Component
{

    render()
    {
        return (
            <footer className="footer">
                <ul className="footer__icon">
                    <li className="footer__container">

                        <a
                            href="https://github.com/WingChhun"
                            className=" footer--icon fa  fa-2x fa-github-square"></a>
                    </li>
                    <li className="footer__container">
                        <a
                            href="https://www.instagram.com/wingchhun/"
                            className=" footer--icon fa fa-2x fa-instagram"></a>
                    </li>
                    <li className="footer__container">
                        <a
                            href="https://codepen.io/WingChhun/"
                            className=" footer--icon fa fa-2x fa-codepen"></a>
                    </li>
                    <li className="footer__container">
                        <a
                            href="https://www.linkedin.com/in/james-chhun-16b1b5120/"
                            className=" footer--icon fa fa-2x fa-linkedin-square"></a>
                    </li>
                </ul>

                <p className="copyright">
                    &copy;
                    <a
                        className="footer__portfolio"
                        href="https://wingchhun.github.io/portfolio.github.io//">James Chhun
                    </a>2018, rickandmortyapi.com</p>

            </footer>

        );
    }

}

export default Footer;