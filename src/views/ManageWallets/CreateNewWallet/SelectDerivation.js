import {Container} from './index';
import {Text} from '@ui-kitten/components';

export function SelectDerivationSubScreen() {
  return (
    <Container>
      <Text category="h4">Select the derivation path for your new wallet:</Text>
      <Text category="c1">
        If you aren't sure what this means, the default option is recommended.
      </Text>
    </Container>
  );
}
