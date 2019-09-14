import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Flex, Box } from 'rebass';

import Frame from './Frame';
import { Button, Text } from '../../components';

const getScreensQuery = gql`
    fragment image on ImageScreen {
        filename
        url
        height
        width
    }

    query {
        project(pk: 4331876) {
            name
            screens(first: 4) {
                edges {
                    node {
                        name
                        modifiedAt
                        content {
                            __typename
                            ...image
                        }
                    }
                }
            }
        }
    }
`;

const Gallery = props => {
    const [index, setIndex] = useState(0);
    const { loading, error, data } = useQuery(getScreensQuery);

    const screens = data ? data.project.screens : null;
    const total = screens ? screens.edges.length : 0;

    function increment() {
        if (index === total - 1) {
            setIndex(index => 0);
        } else {
            setIndex(index => index + 1);
        }
    }

    function decrement() {
        if (index === 0) {
            setIndex(index => total - 1);
        } else {
            setIndex(index => index - 1);
        }
    }

    function onChange(event) {
        let new_index = data.project.screens.edges.findIndex(
            ({
                node: {
                    content: { filename }
                }
            }) => filename === event.label
        );
        setIndex(index => new_index);
    }

    return (
        <Fragment>
            {screens && screens.edges.length ? (
                <Flex flexDirection="column">
                    <Flex alignItems="center">
                        <Text as="h1">{data.project.name}</Text>
                        <Box ml="auto" justify="space-between">
                            <Button onClick={props.themeChange}>
                                {props.themeName}
                            </Button>
                        </Box>
                    </Flex>

                    <Frame
                        items={screens.edges}
                        index={index}
                        loading={loading}
                        error={error}
                        total={total}
                        next={increment}
                        prev={decrement}
                        selectChange={onChange}
                        selectOptions={screens.edges.map(
                            ({
                                node: {
                                    content: { url, filename }
                                }
                            }) => ({
                                value: url,
                                label: filename
                            })
                        )}
                    />
                </Flex>
            ) : (
                <Text textAlign="center" fontWeight="bold" fontSize={7}>
                    Loading Images...
                </Text>
            )}
        </Fragment>
    );
};

Gallery.propTypes = {
    themeChange: PropTypes.func,
    themeName: PropTypes.string
};

export default Gallery;
