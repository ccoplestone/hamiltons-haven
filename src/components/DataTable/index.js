import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './DataTable.module.scss';

const DataTable = ({ asterisk, columns, data }) => (
    <Fragment>
        <table className={classNames(styles.root, !columns && styles.rootIsColumnless)}>
            {Boolean(columns) && (
                <thead>
                    <tr>
                        {data[0].map((item, index) => (
                            <th key={index}>{columns[index] || ''}</th>
                        ))}
                    </tr>
                </thead>
            )}
            <tbody>
                {data.map((item) => (
                    <tr key={item[0]}>
                        {item.map((cell) => (
                            <td key={cell}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        {Boolean(asterisk) && <small className={styles.asterisk}>{asterisk}</small>}
    </Fragment>
);

DataTable.propTypes = {};

DataTable.defaultProps = {};

export default DataTable;
