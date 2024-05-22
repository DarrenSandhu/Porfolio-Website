import { Body, ErrorSubTitle, ErrorTitle, ErrorWrapper } from './PagesStyledComponents';
import ErrorNavbar from '../components/ErrorPageNavBar';

const ErrorPage = () => {
    return (
        <Body>
            <ErrorNavbar/>
            <ErrorWrapper>
                <ErrorTitle>
                    Error 404
                </ErrorTitle>
                <ErrorSubTitle>
                    Page not found
                </ErrorSubTitle>
            </ErrorWrapper>
        </Body>
    )
}

export default ErrorPage;