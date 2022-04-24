# react-ejist-lib

This package contains simple react components to build a simple ui.

At the moment, the package contains barely anything useable, but in future versions there will be more to offer.
You can help improve it by sending pull requests to [this repository](https://github.com/EricStautmeister/react-ejist-lib).

You can install this package using the following command:

```js
 npm i react-ejist-lib
```

Usage:

```jsx
import { GithubIcon } from react-ejist-lib

function DisplaySocialIcons(){
    return <GithubIcon/>
}
```
Available Icons:
```jsx
<FacebookIcon />
<YoutubeIcon />
<GithubIcon />
<InstagramIcon />
<TwitterIcon />
```

Icons take the following props:
<!-- ````md -->
| Prop name | default  |
| --------- | -------   |
| height    | 50px      |
| width     | 50px      |
| classname | ''      |
| href      | ''        |
<!-- ``` -->

