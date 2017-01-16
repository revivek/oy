// This is a very simple test, and could be made more robust.
// All we do is check for the presence of "http://" or "https://"
// at the start of the string.

const description = 'Relative background URLs can break (i.e. if recipients are outside the company network) and make your content unavailable to view.';


export default (props) => {
  if (props.hasOwnProperty('background')) {
    if (!/^https?:\/\//.test(props['background'])) {
      return new Error(description);
    }
  }
};
