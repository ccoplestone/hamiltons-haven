import env from 'app/../env';

const event = ({ action, params }) => {
    window.gtag('event', action, params);
};

const pageview = (url) => {
    window.gtag('config', env.GTM_KEY, {
        page_path: url,
    });
};

export default { event, pageview };
