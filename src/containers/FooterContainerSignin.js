import { Footer } from "../components";

function FooterContainerSignin(){
    return(
        <Footer>
            <Footer.Inner>
                <Footer.Title>Questions? Contact us</Footer.Title>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Link src="#">FAQ</Footer.Link>
                        <Footer.Link src="#">Cookie Preferences</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link src="#">Help Center</Footer.Link>
                        <Footer.Link src="#">Corporate Information</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link src="#">Terms of Use</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link src="#">Privacy</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Text>Netflix Nigeria</Footer.Text>
            </Footer.Inner>
        </Footer>
    )
}

export default FooterContainerSignin

