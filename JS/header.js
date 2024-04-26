
    var header = document.getElementsByClassName('header')[0];
    header.innerHTML = `
        <nav class="nav container">
            <div class="nav__data">
                <a href="home.html" class="nav__logo" style="font-size: 150%;">
                    <span class="mdi--shoe-sneaker"></span>SHOETOPIA
                </a>

                <div class="nav__toggle" id="nav-toggle">
                    <i class="ri-menu-line nav__burger"></i>
                    <i class="ri-close-line nav__close"></i>
                </div>
            </div>

            <!--=============== NAV MENU ===============-->
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li><a href="home.html" class="nav__link">Home</a></li>

                    <!--=============== DROPDOWN MEN ===============-->
                    <li class="dropdown__item">
                        <div class="nav__link"><a href="#sectionM" style="color: black;">MEN</a><i
                                class="ri-arrow-down-s-line dropdown__arrow"></i>
                        </div>

                        <ul class="dropdown__menu">
                            <li>
                                <a href="grid.html" class="dropdown__link">CASUAL
                                </a>
                            </li>

                            <li>
                                <a href="grid.html" class="dropdown__link">PARTY
                                </a>
                            </li>

                            <li>
                                <a href="grid.html" class="dropdown__link">FORMAL
                                </a>
                            </li>

                            <li>
                                <a href="grid.html" class="dropdown__link">SPORTY
                                </a>
                            </li>


                        </ul>
                    </li>
                    <!--=============== DROPDOWN WOMEN ===============-->
                    <li class="dropdown__item">
                        <div class="nav__link"><a href="#sectionW" style="color: black;">WOMEN</a><i
                                class="ri-arrow-down-s-line dropdown__arrow"></i>
                        </div>

                        <ul class="dropdown__menu">
                            <li>
                                <a href="grid.html" class="dropdown__link">CASUAL
                                </a>
                            </li>

                            <li>
                                <a href="grid.html" class="dropdown__link">PARTY
                                </a>
                            </li>

                            <li>
                                <a href="grid.html" class="dropdown__link">FORMAL
                                </a>
                            </li>

                            <li>
                                <a href="grid.html" class="dropdown__link">SPORTY
                                </a>
                            </li>


                        </ul>
                    </li>

                    <!--=============== DROPDOWN KIDS ===============-->
                    <li class="dropdown__item">
                        <div class="nav__link"><a href="#sectionK" style="color: black;">KIDS</a><i
                                class="ri-arrow-down-s-line dropdown__arrow"></i>
                        </div>

                        <ul class="dropdown__menu">
                            <li>
                                <a href="grid.html" class="dropdown__link">CASUAL
                                </a>
                            </li>

                            <li>
                                <a href="grid.html" class="dropdown__link">PARTY
                                </a>
                            </li>

                            <li>
                                <a href="grid.html" class="dropdown__link">FORMAL
                                </a>
                            </li>

                            <li>
                                <a href="grid.html" class="dropdown__link">SPORTY
                                </a>
                            </li>


                        </ul>
                    </li>

                    <li><a href="aboutus.html" class="nav__link">ABOUT US</a></li>
                    <li><a href="cart.html" class="nav__link"><i class="ri-shopping-cart-2-line"
                                style="font-size: 127%;"></i></a></li>
                    <li><a class="nav__link" id='welcome' style="cursor: default;">
                        </a></li>
                </ul>
            </div>
        </nav>`;

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");

    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");
var username = localStorage.getItem("username");
document.getElementById("welcome").innerHTML = '<i class="ri-emotion-line"></i> Hey ' + username.toUpperCase() + '!';

