import './menuPage.css';
import PropTypes from 'prop-types';
import QRCodeGenerator from './QRCodeGenerator';

const MenuPage = (props) => {
    const dishes = props.dishes;
    // console.log('Dishes:', dishes);
    return (
        <>
            {/*Home Section*/}
            <section id="home" className="centered-section">
                <h1>Welcome to FoodieHub</h1>
                <h3 className='desc'>Discover delicious meals made just for you!</h3>
                <h5 className='desc-1'>Welcome to the ultimate food companion - the Food Calorie Calculator! Whether you&apos;re tracking your daily intake, managing your nutrition, or simply exploring new food options, our website offers a smart and user-friendly tool to help you make informed choices. With an extensive food database and real-time calorie tracking, you can easily calculate the nutritional value of any meal, snack, or ingredient. Stay in control of your health goals with personalized recommendations, meal planning features, and insightful analysis. Empower yourself to live a healthier lifestyle with every bite!</h5>
            </section>
            <section id="menu" className="centered-section">
                <h2>Our Menu</h2>
                <div className="card-container">
                    {
                        dishes.map((dish) => (
                            <div className="card" key={dish.id}>
                                <img src={dish.imageSrc} alt="Idli" className="card-img" />
                                <p className='food-name'>Dish Name: {dish.dishName}</p>
                                <p>Price: ${dish.price}</p>
                                <ul>
                                    {dish.items.map((item) => (
                                        <div key={item._id}>
                                            {/* <li >Name: {item.name} Calories: {item.calories} Quantity: {item.quantity}</li> */}
                                        </div>
                                    ))}
                                </ul>
                                <QRCodeGenerator dish={dish} />
                            </div>
                        ))
                    }
                </div>
            </section>
            {/* <!-- About Section --> */}
            <section id="about" className="centered-section">
                <h2>About Us</h2>
                <p>
                    At <strong>FoodieHub</strong>, we are passionate about bringing the joy of food to your life. Our goal is to
                    provide a wide variety of
                    meals that cater to every taste, from traditional classics to contemporary delights.
                </p>
                <p>
                    Our chefs use the freshest ingredients to craft meals that are both healthy and delicious. We are committed
                    to sustainability
                    and partner with local farmers and suppliers to ensure high-quality food while supporting the community.
                </p>
                <p>
                    Whether you&apos;re here to grab a quick bite, enjoy a family meal, or explore new cuisines, we strive to create
                    an experience
                    that leaves you smiling. Thank you for choosing FoodieHub!
                </p>
            </section>
            {/* <!-- Contact Section --> */}
            <section id="contact" className="centered-section">
                <h2>Contact Us</h2>
                <p>We&apos;d love to hear from you! Reach out to us using any of the methods below:</p>
                <ul className="contact-details">
                    <li><strong>Email:</strong> <a href="mailto:support@foodiehub.com">support@foodiehub.com</a></li>
                    <li><strong>Phone:</strong> +123 456 7890</li>
                    <li><strong>Address:</strong> 123 Foodie Street, New Delhi, India</li>
                </ul>
                <h3>Follow Us</h3>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/" target='_blank'>Facebook</a></li>
                    <li><a href="https://www.instagram.com/" target='_blank'>Instagram</a></li>
                    <li><a href="https://x.com/" target='_blank'>Twitter</a></li>
                </ul>
            </section>
        </>
    )
}

MenuPage.propTypes = {
    dishes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        dishName: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired
        })).isRequired
    })).isRequired
};

export default MenuPage;