import { Button } from '@react-email/button';
import { Html } from '@react-email/html';

interface IEmailTemplateProps {
  name: string;
  email: string;
  date: string;
  time: string;
}

export default function EmailTemplate(props: IEmailTemplateProps) {
  return (
    <Html lang="en" dir="ltr">
      <Button href="https://example.com" style={{ color: '#61dafb' }}>
        Click me
      </Button>
    </Html>
  )
}
