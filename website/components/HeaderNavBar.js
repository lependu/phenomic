// @flow

import * as React from "react";
import { View, Text, StyleSheet } from "react-native-web";

import { version } from "../.././lerna.json";
import PhenomicLogoWhite from "../svgs/PhenomicLogoWhite";
import PhenomicText from "../svgs/PhenomicText";
import IconWrench from "../svgs/IconWrench";
import IconTools from "../svgs/IconTools";
import Github from "../svgs/Github";
import Twitter from "../svgs/Twitter";
import Spectrum from "../svgs/Spectrum";
import Gitter from "../svgs/Gitter";

import Link from "./Link";
import Spacer from "./Spacer";

const HeaderNavBar = () => (
  <React.Fragment>
    <View style={[styles.row, styles.wip]}>
      <Spacer large>
        <Text style={styles.wipText}>
          <IconWrench height="16" fill="#fff" style={{ margin: "0 20px" }} />
          {" This website is a work in progress. "}
          <IconTools height="16" fill="#fff" style={{ margin: "0 20px" }} />
        </Text>
      </Spacer>
    </View>
    <View style={[styles.row, styles.header]}>
      <Spacer small style={[styles.row, styles.logo]}>
        <Link.Touchable href="/">
          <Spacer small style={{ flex: 0 }}>
            <PhenomicLogoWhite height="42" />
          </Spacer>
        </Link.Touchable>
        <View>
          <Link.Touchable href="/">
            <Spacer small>
              <PhenomicText height="18" />
            </Spacer>
          </Link.Touchable>
          <Link.Touchable
            href="https://github.com/phenomic/phenomic/releases"
            style={styles.version}
          >
            <Spacer small>
              <Text>{"v" + version}</Text>
            </Spacer>
          </Link.Touchable>
        </View>
      </Spacer>
      <Spacer small style={[styles.row, styles.center]}>
        <Link.Touchable
          href="/en/packages/core/docs/"
          style={styles.link}
          activeStyle={styles.linkActive}
        >
          <Text style={styles.linkText}>{"Docs"}</Text>
        </Link.Touchable>
        <Link.Touchable
          href="/en/tutorials/"
          style={styles.link}
          activeStyle={styles.linkActive}
        >
          <Text style={styles.linkText}>{"Tutorials"}</Text>
        </Link.Touchable>
        <Link.Touchable
          href="/en/plugins/"
          style={styles.link}
          activeStyle={styles.linkActive}
        >
          <Text style={styles.linkText}>{"Plugins"}</Text>
        </Link.Touchable>
        <Link.Touchable
          href="/en/blog/"
          style={styles.link}
          activeStyle={styles.linkActive}
        >
          <Text style={[styles.linkText]}>{"Blog"}</Text>
        </Link.Touchable>
        <Link.Touchable
          href="/en/showcase/"
          style={styles.link}
          activeStyle={styles.linkActive}
        >
          <Text style={[styles.linkText, styles.linkBold]}>{"Showcase"}</Text>
        </Link.Touchable>
      </Spacer>
      <Spacer small style={[styles.row, styles.end]}>
        <Link.Touchable
          href="https://github.com/phenomic/phenomic"
          style={[styles.link, styles.linkIcon]}
          title={"GitHub"}
        >
          <Github height="24" fill="#fff" />
          <Text style={styles.linkIconText}>{"GitHub"}</Text>
        </Link.Touchable>
        <Link.Touchable
          href="https://twitter.com/Phenomic_app"
          style={[styles.link, styles.linkIcon]}
          title={"Twitter"}
        >
          <Twitter height="24" fill="#fff" />
          <Text style={styles.linkIconText}>{"Twitter"}</Text>
        </Link.Touchable>
        <Link.Touchable
          href="https://spectrum.chat/phenomic"
          style={[styles.link, styles.linkIcon]}
          title={"Community"}
        >
          <Spectrum height="24" fill="#fff" />
          <Text style={styles.linkIconText}>{"Community"}</Text>
        </Link.Touchable>
        <Link.Touchable
          href="https://gitter.im/MoOx/phenomic"
          style={[styles.link, styles.linkIcon]}
          title={"Chat"}
        >
          <Gitter height="24" fill="#fff" />
          <Text style={styles.linkIconText}>{"Chat"}</Text>
        </Link.Touchable>
      </Spacer>
    </View>
  </React.Fragment>
);

const styles = StyleSheet.create({
  row: {
    flexShrink: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  },
  wip: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#041d0f"
  },
  wipText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    color: "#fff",
    fontWeight: "100"
  },
  header: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "rgba(0,0,0,0.25)"
  },
  logo: {
    maxHeight: 42 + Spacer.small,
    overflow: "hidden"
  },
  version: {
    position: "absolute",
    bottom: -Spacer.normal,
    textDecorationLine: "none",
    color: "#fff",
    opacity: 0.2,
    fontSize: 12
  },
  link: {
    textDecorationLine: "none",
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  linkIcon: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 8
  },
  linkActive: {
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  linkText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "300"
  },
  linkIconText: {
    color: "#fff",
    paddingTop: 2,
    fontSize: 8,
    fontWeight: "200"
  },
  linkBold: {
    fontWeight: "700"
  },
  center: {
    flex: 2,
    justifyContent: "center"
  },
  end: {
    justifyContent: "flex-end"
  }
});

export default HeaderNavBar;
