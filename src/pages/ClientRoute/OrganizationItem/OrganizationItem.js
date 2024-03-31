import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import {useParams} from 'react-router-dom';
import { Context } from '../../../index';
import styles from './OrganizationItem.module.css';

const OrganizationItem = observer(() => {

    // const {organization_id} = useParams();


    const { user } = useContext(Context);

     // для выбора услуги
    // console.log(user.selectedOrganization)
    
    const handleSelectService = (service) => {

        if (user.selectedServices.find(s => s.type_id === service.type_id)) {
            user.removeSelectedService(service.type_id);
        } else {
            user.addSelectedService(service);
        }
    };


    // Проверка, выбрана ли услуга
    const isServiceSelected = (service) => {
        return user.selectedServices.some(s => s.type_id === service.type_id);
    };


    const filteredServices = user.carServices.filter(service => service.type_code === user.selectedService);



    return (
        <div className={styles.services__container}>
            <h2>Услуги для {user.selectedOrganization.subject_name}</h2>
            {/* <div>{`ул ${user.selectedOrganization.street_name}, д ${user.selectedOrganization.house_number}`}</div> */}
            {filteredServices.map(service => (
                <div key={service.type_id} className={styles.service__item}>
                    <input
                        type="checkbox"
                        id={`service-${service.type_id}`}
                        checked={isServiceSelected(service)}
                        onChange={() => handleSelectService(service)}
                    />
                    <label htmlFor={`service-${service.type_id}`}>
                        {service.type_name} - {service.price} руб., {service.duration}
                    </label>
                </div>
            ))}
        </div>
    );
});

export default OrganizationItem;