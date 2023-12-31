const DPENV: any = window;
const DECKPUNCH = DPENV?._env_?.REACT_APP_DECKPUNCH_URL
const LABYRINTH_URL = DPENV?._env_?.REACT_APP_LABYRINTH_URL
const LANTERN_URL = DPENV?._env_?.REACT_APP_LANTERN_URL
const TIRADE_URL = DPENV?._env_?.REACT_APP_TIRADE_URL
const VAULT_URL = DPENV?._env_?.REACT_APP_VAULT_URL
const BROADCAST_MESSAGING_URL = DPENV?._env_?.REACT_APP_BROADCAST_MESSAGING_URL
const PERFECTA_MEET_URL = DPENV?._env_?.REACT_APP_PERFECTA_MEET_URL
const PATAKA_URL = DPENV?._env_?.REACT_APP_PATAKA_URL

const SCANNER_URL = DPENV?._env_?.REACT_APP_SCANNER_URL
const GRAFANA_URL = DPENV?._env_?.REACT_APP_GRAFANA_URL

const KEYCLOAK_CLIENT = DPENV?._env_?.REACT_APP_KEYCLOAK_CLIENT
const KEYCLOAK_REALM = DPENV?._env_?.REACT_APP_KEYCLOAK_REALM
const KEYCLOAK_URL = DPENV?._env_?.REACT_APP_KEYCLOAK_URL

export {
    DECKPUNCH,
    KEYCLOAK_CLIENT,
    KEYCLOAK_REALM,
    KEYCLOAK_URL,
    LABYRINTH_URL,
    LANTERN_URL,
    TIRADE_URL,
    VAULT_URL,
    BROADCAST_MESSAGING_URL,
    PERFECTA_MEET_URL,
    PATAKA_URL,
    GRAFANA_URL,
    SCANNER_URL
}