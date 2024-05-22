import { ErrorSubTitle, ErrorTitle, ErrorWrapper } from './PagesStyledComponents';

const ErrorPage = () => {
    return (
        <ErrorWrapper>
            <ErrorTitle>
                Error 404
            </ErrorTitle>
            <ErrorSubTitle>
                Page not found
            </ErrorSubTitle>
        </ErrorWrapper>
    )
}

export default ErrorPage;