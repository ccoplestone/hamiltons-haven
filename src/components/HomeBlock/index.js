import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ucwords } from 'app/utility';

import Container from 'app/components/Container';
import Content from 'app/components/Content';

import styles from './HomeBlock.module.scss';

const HomeBlock = ({ children, image, imageAlt, title, isReverse }) => {
    const imageSrc = require(`../../../public/images/${image}.png`);

    return (
        <article className={classNames(styles.root, isReverse && styles.rootIsReverse)}>
            <Container>
                <div className={classNames(styles.inner, isReverse && styles.innerIsReverse)}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>{title}</h2>
                        <Content>{children}</Content>
                    </div>
                    <figure className={styles.figure}>
                        <img alt={imageAlt} className={styles.image} src={imageSrc} />
                    </figure>
                </div>
            </Container>
        </article>
    );
};

HomeBlock.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default HomeBlock;
