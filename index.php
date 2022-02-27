<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" 
    integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <title>Festival de films</title>
</head>
<body>
    
    <header class="header">
        <a href="#">Films de Plein Air</a>
    </header>

    <section class="banner">
        <h1 class="banner__title">Découvrez le meilleur du cinéma en plein air !</h1>
        <p class="banner__content text-content">
            L'association Films de Plein Air regroupe des passionnés de films d'auteur.
            En partenariat avec la Mairie du 8ème arrondissement à Paris, nous mettons à disposition le parc Monceau, à l'occasion du festival "Films de Plein Air".
        </p>
    </section>

    <main class="container">

        <section class="about">
            <div>
                <h2 class="about__title title-section">Le festival des films de plein air !</h2>
                <p class="about__content text-content">
                Bienvenue au festival des films de plein air !
                <br>
                Pour cette première édition du festival, nous vous proposons de découvrir des films d'auteur grand public.
                <br>
                Vous pourrez assister au en plein air, à la projection de films français ou américains, qui vous plongeront dans l'univers de chaque réalisateur.
                <br>
                Des projections sur un écran de 10 mètres de hauteur se dérouleront du 5 au 8 août 2022 en plein cœur du parc Monceau, à Paris.
                </p>
            </div>
            <img src="./assets/flyer.png" alt="flyer festival de films">
        </section>  

        <section class="movies">
            <h2 class="movies__title title-section">Nos prochaines date de projections</h2>

            <div class="swiper js-swiper-days movies__wrapper">
                <div class="swiper-wrapper">
                    <span class="swiper-slide js-day movies__day active" data-day="05/08">
                        Le vendredi 5 août
                    </span>
                    <span class="swiper-slide js-day movies__day" data-day="06/08">
                        Le samedi 6 août
                    </span>
                    <span class="swiper-slide js-day movies__day" data-day="07/08">
                        Le dimanche 7 août
                    </span>
                    <span class="swiper-slide js-day movies__day" data-day="08/08">
                        Le lundi 8 août
                    </span>
                </div>
            </div>

            <div class="swiper js-swiper-movies movies__wrapper">
                <div class="swiper-wrapper">
                   <!-- cards movies -->
                </div>
                <div class="swiper-movie-button-next">
                    <button>
                        <i class="fas fa-angle-right"></i>
                    </button>
                </div>
                <div class="swiper-movie-button-prev">
                    <button>
                        <i class="fas fa-angle-left"></i>
                    </button>
                </div>
            </div>
        </section>

        <section class="actualities">
            <h2 class="actualities__title title-section">Suivez l'actualités</h2>

            <div class="swiper js-swiper-actualities">
                <div class="swiper-wrapper">
                    <div class="swiper-slide actualities__card">
                        <img src="./assets/actuality.png" alt="">
                        <span>il y a 12h</span>
                        <h3>Découvrez l'une des légendes du cinéma</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus enim consequatur, eum consectetur laborum perferendis?
                        </p>    
                    </div>
                    <div class="swiper-slide actualities__card">
                        <img src="./assets/actuality.png" alt="">
                        <span>il y a 12h</span>
                        <h3>Découvrez l'une des légendes du cinéma</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus enim consequatur, eum consectetur laborum perferendis?
                        </p>    
                    </div>
                    <div class="swiper-slide actualities__card">
                        <img src="./assets/actuality.png" alt="">
                        <span>il y a 12h</span>
                        <h3>Découvrez l'une des légendes du cinéma</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus enim consequatur, eum consectetur laborum perferendis?
                        </p>    
                    </div>
                    <div class="swiper-slide actualities__card">
                        <img src="./assets/actuality.png" alt="">
                        <span>il y a 12h</span>
                        <h3>Découvrez l'une des légendes du cinéma</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus enim consequatur, eum consectetur laborum perferendis?
                        </p>    
                    </div>
                    <div class="swiper-slide actualities__card">
                        <img src="./assets/actuality.png" alt="">
                        <span>il y a 12h</span>
                        <h3>Découvrez l'une des légendes du cinéma</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus enim consequatur, eum consectetur laborum perferendis?
                        </p>    
                    </div>
                </div>
                <div class="swiper-actuality-button-next">
                    <button>
                        <i class="fas fa-angle-right"></i>
                    </button>
                </div>
                <div class="swiper-actuality-button-prev">
                    <button>
                        <i class="fas fa-angle-left"></i>
                    </button>
                </div>
            </div>
        </section>
    </main>

    <section class="contact">
        <h2 class="contact__title title-section">Contactez-nous</h2>
        <form class="contact__form" id="js-form-contact">
            <div>
                <label for="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Votre nom...">
                <span class="js-error-name"></span>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Votre email...">
                <span class="js-error-email"></span>
            </div>
            <div>
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="" rows="11" placeholder="Votre message..."></textarea>
                <span class="js-error-message"></span>
            </div>
            <button type="submit">Envoyer</button>
        </form>
    </section>
    
    <footer class="footer container">
        <ul>
            <li>
                <a href="#"><i class="fab fa-facebook"></i></a>
            </li>
            <li>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
                <a href="#"><i class="fab fa-snapchat-ghost"></i></a>
            </li>
            <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
        </ul>
        <a class="footer__legal" href="#">Mentions légales</a>
    </footer>

    <script src="./js/slider-days.js" type="module" defer></script>
    <script src="./js/slider-movies.js" type="module" defer></script>
    <script src="./js/slider-actualities.js" type="module" defer></script>
    <script src="./js/select-movies.js" type="module" defer></script>
    <script src="./js/contact-validation.js" type="module" defer></script>
</body>
</html>