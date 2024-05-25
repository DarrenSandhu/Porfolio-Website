import { Body, ErrorSubTitle, ErrorTitle, ErrorWrapper } from './PagesStyledComponents';
import ErrorNavbar from '../components/ErrorPageNavBar';
import { Navigate } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <Body>
                <ErrorWrapper>
                    <ErrorTitle>
                        Error 404
                    </ErrorTitle>
                    <ErrorSubTitle>
                        Page not found
                    </ErrorSubTitle>
                </ErrorWrapper>
            </Body>
            <Navigate to="/404" />
        </>
    )
}

export default ErrorPage;