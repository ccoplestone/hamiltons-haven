import React from 'react';
import classNames from 'classnames';

import env from 'app/../env';

import { useExchange, useFormData } from 'nwi-utility';

import Button from 'app/components/Button';
import FormField from 'app/components/FormField';
import TextArea from 'app/components/TextArea';
import FormSubmit from 'app/components/FormSubmit';
import TextInput from 'app/components/TextInput';

import styles from './ContactForm.module.scss';

const ContactForm = () => {
    const [formData, setFormData] = useFormData({
        RPk8d9wEUnaRejeD: '',
        name: '',
        email: '',
        message: '',
    });

    const { errors, handleReset, handleSubmit, isLoading, isSuccess } = useExchange(
        env.EXCHANGE_URL,
        formData
    );

    if (isSuccess) {
        return (
            <div className={classNames(styles.root, styles.rootSuccess)}>
                <p className={styles.success}>
                    <i className={styles.successIcon} />
                    <span className={styles.successTitle}>Thank you for your enquiry</span>
                    <span className={styles.successDesc}>
                        A member of the team will be in touch shortly
                    </span>
                </p>
                <p className={styles.successAction}>
                    <Button onClick={handleReset} isBlock>
                        Back to Form
                    </Button>
                </p>
            </div>
        );
    }

    return (
        <form className={styles.root} onSubmit={handleSubmit}>
            <div style={{ display: 'none' }}>
                <TextInput
                    name="RPk8d9wEUnaRejeD"
                    onChange={(event) => setFormData('RPk8d9wEUnaRejeD', event.target.value)}
                    value={formData.RPk8d9wEUnaRejeD}
                />
            </div>

            <FormField error={errors.name} label="Name" name="name" isRequired>
                <TextInput
                    onChange={(event) => setFormData('name', event.target.value)}
                    value={formData.name}
                />
            </FormField>
            <FormField error={errors.email} label="Email" name="email" isRequired>
                <TextInput
                    onChange={(event) => setFormData('email', event.target.value)}
                    type="email"
                    value={formData.email}
                />
            </FormField>
            <FormField error={errors.message} label="Message" name="message" isRequired>
                <TextArea
                    onChange={(event) => setFormData('message', event.target.value)}
                    value={formData.message}
                />
            </FormField>

            <small className={styles.required}>
                <i>*</i> required information
            </small>

            <div className={styles.actions}>
                <FormSubmit isDisabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                </FormSubmit>
            </div>
        </form>
    );
};

ContactForm.propTypes = {};

ContactForm.defaultProps = {};

export default ContactForm;
