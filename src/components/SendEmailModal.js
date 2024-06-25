import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import emailjs from 'emailjs-com';

ReactModal.setAppElement('#root');

const SendEmailModal = ({ isOpen, onRequestClose, likedImages, galleryName }) => {
    const [name, setName] = useState('');;

    useEffect(() => {
        console.log('Gallery Name: ', galleryName);
    }, [galleryName]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const likedImageDetails = likedImages.map(image => `${image.caption} (ID: ${image.id})`).join('\n');

        const templateParams = {
            to_name: 'Maggie',
            from_name: name,
            message: likedImageDetails,
            gallery_name: galleryName,
        };

        console.log('Sending email with params:', templateParams); // Log the params to console

        emailjs.send('service_zdo7lp8', 'template_xudhrkn', templateParams, 'M6qG3Ohjnk7js250h')
        .then(response => {
            console.log('Email sent successfully!', response.status, response.text);
            onRequestClose();
        })
        .catch(error => {
            console.error('Failed to send email.', error);
        });
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Send Email"
            className="Modal"
            overlayClassName="Overlay"
        >
            <h2>Send Liked Images</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Your Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </label>
                <p><strong>Gallery:</strong> {galleryName}</p>
                <p><strong>Liked Images:</strong></p>
                <ul>
                    {likedImages.map(image => (
                        <li key={image.id}>{image.caption} (ID: {image.id})</li>
                    ))}
                </ul>
                <button type="submit">Send</button>
                <button type="button" onClick={onRequestClose}>Cancel</button>
            </form>
        </ReactModal>
    );
};

export default SendEmailModal;
