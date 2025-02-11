import React, { useEffect, useRef, useState } from "react"
import "./qr.css";
import QRCodeStyling from "qr-code-styling";

//styles
import Button from 'react-bootstrap/Button'


const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Iredoc2.svg",
    dotsOptions: {
        color: "#0b5793",
        type: "rounded"
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 5
    }
});


export default function QrCode(props) {
    const [url, setUrl] = useState(props.data);
    const fileExt = "png"
    const ref = useRef(null);

    useEffect(() => {
        setUrl(props.data);
        qrCode.append(ref.current);
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [props.data]);

    useEffect(() => {
        qrCode.update({
            data: url
        });
    }, [url]);

    const onDownloadClick = () => {
        qrCode.download({
            extension: fileExt
        });
    };

    return (
        <div className="QR-section">
            <div style={styles.QRsection} ref={ref} />
            <Button style={styles.dwnloadBtn} variant="primary" onClick={onDownloadClick}>Download</Button>
        </div>
    );
}

const styles = {
    dwnloadBtn: {
        marginTop: '50px',
        width: '100%'
    },

    QRsection: {
        marginTop: '50vh'
    }
};

