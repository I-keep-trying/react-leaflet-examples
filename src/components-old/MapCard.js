import React from 'react';
import {Card} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {useSelector} from "react-redux";

const { Meta } = Card;

const MapCard = () => {
    const mapState = useSelector(state => state);

    return (
        <>
            <Card
                style={{
                    position: 'absolute',
                    width: '23vw',
                    bottom: '50vh',
                    backgroundColor: '#FFFFFFDD',
                    right: '1vw',
                    lineHeight: '30px',
                    zIndex: 1000,
                    borderRadius: 10
                }}>
                <Meta
                    title={mapState.regionalInfo.name}
                />
                <Meta
                    title={mapState?.regionalInfo?.currencySymbol}
                />
                <Meta
                    title={mapState?.regionalInfo?.speedUnit}
                />
                <Meta
                    title={mapState?.regionalInfo?.distanceUnit}
                />
                <Meta
                    title={mapState?.regionalInfo?.volumeUnit}
                />
                <Meta
                    title={mapState?.regionalInfo?.timeZones}
                />
            </Card>
        </>
    );
};

export default MapCard;
