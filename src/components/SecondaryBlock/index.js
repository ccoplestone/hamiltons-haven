import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Content from 'app/components/Content';

import styles from './SecondaryBlock.module.scss';

const SecondaryBlock = ({ aside, children, images, imageAlts, isSpaced, isWide }) => {
    const imageSrcs = images
        ? images.map((item) => require(`../../../public/images/${item}.png`))
        : null;

    return (
        <div className={classNames(styles.root, isSpaced && styles.rootIsSpaced)}>
            <div className={classNames(styles.content, isWide && styles.contentIsWide)}>
                <Content>{children}</Content>
            </div>
            {Boolean(aside) && <aside className={styles.aside}>{aside}</aside>}
            {Boolean(imageSrcs && imageSrcs.length) && (
                <figure className={styles.figure}>
                    {imageSrcs.map((item, index) => (
                        <img
                            key={index}
                            alt={imageAlts[index]}
                            className={styles.image}
                            src={item}
                        />
                    ))}
                </figure>
            )}
        </div>
    );
};

SecondaryBlock.propTypes = {};

SecondaryBlock.defaultProps = {};

export default SecondaryBlock;
