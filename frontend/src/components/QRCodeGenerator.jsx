import QRCode from "react-qr-code";
import PropTypes from 'prop-types';


const QRCodeGenerator = (props) => {
    const data = props.dish;
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h3>Scan Here</h3>
            
            <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                value={(`Dish Name: ${data.dishName}
                    \nItems: ${data.items.map((item) => item.name).join(", ")}
                    \nTotal Calories: ${data.items.map((item) => item.calories).reduce((a, b) => a + b, 0)}`)}
                size={150}
                level="H" // Error correction level: H = High
            />
        </div>
    );
};
QRCodeGenerator.propTypes = {
    dish: PropTypes.object.isRequired, // Assuming 'dish' is an object
    item: PropTypes.string.isRequired, // Assuming 'item' is a string
};

export default QRCodeGenerator;
