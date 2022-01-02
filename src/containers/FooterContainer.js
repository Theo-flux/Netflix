import { Footer  } from "../components";

function FooterContainer(){
    return(
        <Footer>
            <Footer.Title>Questions? Contact us</Footer.Title>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link src="#">FAQ</Footer.Link>
                    <Footer.Link src="#">Investor Relations</Footer.Link>
                    <Footer.Link src="#">Privacy</Footer.Link>
                    <Footer.Link src="#">Speed Test</Footer.Link>
                    <Footer.Link src="#">FAQ</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link src="#">Help Center</Footer.Link>
                    <Footer.Link src="#">Jobs</Footer.Link>
                    <Footer.Link src="#">Cookie Preferences</Footer.Link>
                    <Footer.Link src="#">Legal Notices</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link src="#">Account</Footer.Link>
                    <Footer.Link src="#">Ways To Watch</Footer.Link>
                    <Footer.Link src="#">Corporate Information</Footer.Link>
                    <Footer.Link src="#">Only on Netflix </Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link src="#">Media Center</Footer.Link>
                    <Footer.Link src="#">Terms of Use</Footer.Link>
                    <Footer.Link src="#">Contact Us</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Text>Netflix Nigeria</Footer.Text>
        </Footer>
    )
}

export default FooterContainer

