import React, {forwardRef, useState} from 'react'
import DatePicker from "react-datepicker"
import { subDays, format } from "date-fns"
import "react-datepicker/dist/react-datepicker.css"
import ru from 'date-fns/locale/ru'
import { registerLocale } from 'react-datepicker';
registerLocale('ru', ru)

function CustomDatePicker(props){

    const [startDate, setStartDate] = useState(new Date(props.dateStart));

    const handleChangeDate = date => {
        setStartDate(date)
        const dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        const mm = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
        const dateShort = dd + '-' + mm + '-' + date.getFullYear()
        console.log(dateShort)
        props.fetchCurrencies(dateShort)
    }

    const availableDate = date => {
        const available = props.available
        const dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        const mm = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
        const dateShort = dd + '/' + mm + '/' + date.getFullYear()

        if( available.includes(dateShort) ){ return true }
        return false
    }

    const ref = React.createRef()

    const DeliveryDateInput = forwardRef(({ value, onClick }, _ref) => {
        const day = value.split(' ')[0]
        const month = value.split(' ')[1]
        const year = value.split(' ')[2]
        const weekday = value.split(' ')[3]

        const currentDate = day + ' ' + month + ' ' + year + ' (' + weekday + ')'

        return (
            <div
                onClick={ onClick }
                ref={_ref}
                style={{position: 'relative'}}
            >
                <input
                    className="form-control"
                    value={currentDate}
                />

                <svg className="delivery-date-icon" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 11H9V16H14V11ZM13 0V2H5V0H3V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2H15V0H13ZM16 18H2V7H16V18Z" fill="#E6E6E6"/>
                </svg>
            </div>
        )
    })

    return (

        <DatePicker
            selected={ startDate }
            onChange={ handleChangeDate }
            locale="ru"
            dateFormat="d MMMM yyyy EEEE"
            minDate={props.minDate? new Date(props.minDate) : subDays(new Date(),  30)}
            maxDate={props.maxDate? new Date(props.maxDate) : new Date()}
            //showDisabledMonthNavigation
            filterDate={ availableDate }
            customInput={<DeliveryDateInput ref={ref} />}
            popperClassName="some-custom-class"
            dayClassName={(date) =>
                availableDate(date) && date != startDate ? "available" : undefined
            }
            popperPlacement="top-center"
            shouldCloseOnSelect={true}
            popperModifiers={{
                offset: {
                    enabled: true,
                    offset: "5px, 3px"
                },
                preventOverflow: {
                    enabled: true,
                    escapeWithReference: false,
                    boundariesElement: "viewport"
                }
            }}
        />
    )
}

export default CustomDatePicker