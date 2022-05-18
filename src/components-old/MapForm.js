import React from 'react';
import {Button, Form, Select} from "antd";
import {useDispatch} from "react-redux";
import {Action} from '../store/Actions.js';

const {Option} = Select;

export const allData = {
    coordinates: {
        IN: [20.593684, 78.96288],
        US: [39.381266, -97.922211],
        UK: [55.378051, -3.435973]
    },
    regionalInfo: {
        IN: {
            name: 'Name: India 🇮🇳',
            currencySymbol: 'CurrencySymbol 💸: ₹',
            speedUnit: 'SpeedUnit 🏃: km/h',
            distanceUnit: 'DistanceUnit 📏: kilometer',
            volumeUnit: 'VolumeUnit 🚰: liter',
            timeZones: 'TimeZone(s) ⏲️️: UTC +05:30'
        },
        US: {
            name: 'Name: United States 🇺🇸',
            currencySymbol: 'CurrencySymbol 💸: $',
            speedUnit: 'SpeedUnit 🏃: MPH',
            distanceUnit: 'DistanceUnit 📏: mile',
            volumeUnit: 'VolumeUnit 🚰: liter',
            timeZones: 'TimeZone(s) ⏲️: UTC -05:00 / -04:00'
        },
        UK: {
            name: 'Name: United Kingdom 🇬🇧',
            currencySymbol: 'CurrencySymbol 💸: £',
            speedUnit: 'SpeedUnit 🏃: MPH',
            distanceUnit: 'DistanceUnit 📏: mile',
            volumeUnit: 'VolumeUnit 🚰: cubic inches',
            timeZones: 'TimeZone(s) ⏲️: UTC +00:00'
        }
    }
};

const MapForm = ({mapRef}) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onLoadPress = async (values) => {
        const country = values['dropdown'];

        console.log(allData.coordinates[country], 'alldata > coordinates')
        console.log(allData.regionalInfo[country], 'alldata > regionalInfo')

        dispatch(Action.updateCoordinates(allData.coordinates[country]));
        dispatch(Action.updateRegionalInfo(allData.regionalInfo[country]));

        mapRef.current?.flyTo(allData.coordinates[country], 4);
    };

    return (
        <div
            style={{
                position: 'absolute',
                height: '13vh',
                width: '23vw',
                zIndex: 1000,
                backgroundColor: '#FFFFFFDD',
                right: '1vw',
                top: '1vh',
                borderRadius: 8,
            }}
        >
            <Form
                className="login-form"
                form={form}
                layout={'inline'}
                onFinish={onLoadPress}
                style={{
                    paddingTop: '4vh',
                    paddingLeft: '2vw',
                    color: 'white'
                }}>
                <Form.Item name={'dropdown'} label="Select Country" initialValue={'IN'}>
                    <Select
                        style={{width: '100%'}}
                        placeholder="Please select"
                    >
                        <Option key={'IN'} value={'IN'}>India</Option>
                        <Option key={'US'} value={'US'}>US</Option>
                        <Option key={'UK'} value={'UK'}>UK</Option>
                    </Select>
                </Form.Item>
                <Form.Item className='formItem'>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Load
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default MapForm;
