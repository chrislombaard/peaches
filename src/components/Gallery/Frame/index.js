import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { Flex, Box, Image } from 'rebass';
import { Arrow, Text, Plus, Minus } from '../../../components';

class Frame extends Component {
    constructor(props) {
        super(props);
        const index = props.index;
        const img = props.items[index].node.content;
        this.state = {
            img,
            modified_img: img,
            width: img.width - img.width * 0.5,
            height: img.height - img.height * 0.5,
            index: props.index
        };
        this.zoomIn = this.zoomIn.bind(this);
        this.zoomOut = this.zoomOut.bind(this);
        this.zoomRatio = this.zoomRatio.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.index !== state.index) {
            const img = props.items[props.index].node.content;
            return {
                index: props.index,
                img: img,
                width: img.width - img.width * 0.5,
                height: img.height - img.height * 0.5
            };
        }
        return { ...state };
    }

    zoomIn() {
        const { width, height, img } = this.state;
        if (this.zoomRatio() >= 100) return;
        let new_width = width + img.width * 0.05;
        let new_height = height + img.height * 0.05;
        this.setState({ width: new_width, height: new_height });
    }

    zoomOut() {
        const { width, height, img } = this.state;
        if (this.zoomRatio() <= 50) return;
        let new_width = width - img.width * 0.05;
        let new_height = height - img.height * 0.05;
        this.setState({ width: new_width, height: new_height });
    }

    zoomRatio() {
        let { width, height, img } = this.state;
        const width_ratio = Math.round((width / img.width) * 100);
        const height_ratio = Math.round((height / img.hieght) * 100);
        return width_ratio || height_ratio;
    }

    render() {
        const { width, height, img, index } = this.state;
        const {
            loading,
            error,
            total,
            next,
            prev,
            selectChange,
            selectOptions
        } = this.props;
        const zoom_percentage = this.zoomRatio();

        return img ? (
            <Box width={1} key={index}>
                <Flex my={2} alignItems="center">
                    <Flex flexDirection="column">
                        <Text fontWeight="bold" fontSize={2}>
                            {img.filename}
                        </Text>
                        <Box width={200}>
                            <Text fontWeight="medium" fontSize={4}>
                                {img.width} x {img.height}
                            </Text>
                        </Box>
                    </Flex>
                    <Box mx="auto" justify="space-around">
                        <Flex alignItems="center">
                            <Arrow left onClick={prev} />
                            <Text
                                fontSize={4}
                                textAlign="center"
                                fontWeight="bold"
                            >
                                {`Screen: ${index + 1} of ${total}`}
                            </Text>
                            <Arrow right onClick={next} />
                        </Flex>
                    </Box>
                    <Flex flexDirection="column" my={2}>
                        <Box ml="auto" width={200} justify="space-between">
                            <Select
                                options={selectOptions}
                                onChange={selectChange}
                            />
                        </Box>
                        <Flex alignItems="center" mx="auto" my={2}>
                            <Plus onClick={this.zoomIn} />
                            <Text
                                textAlign="center"
                                width={70}
                                fontWeight="bold"
                                fontSize={4}
                            >
                                {zoom_percentage}%
                            </Text>
                            <Minus onClick={this.zoomOut} />
                        </Flex>
                    </Flex>
                </Flex>

                <Box textAlign="center">
                    <Image
                        src={img.url}
                        alt={img.filename}
                        width={width}
                        height={height}
                    />
                </Box>
            </Box>
        ) : loading ? (
            <Text textAlign="center" fontWeight="bold" fontSize={8}>
                Loading Image...
            </Text>
        ) : error ? (
            <Text textAlign="center" fontWeight="bold" fontSize={8}>
                There was an error...
            </Text>
        ) : (
            <Text textAlign="center" fontWeight="bold" fontSize={8}>
                Something else happened.
            </Text>
        );
    }
}

Frame.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    items: PropTypes.array,
    total: PropTypes.number,
    next: PropTypes.func,
    prev: PropTypes.func,
    selectChange: PropTypes.func,
    selecOptions: PropTypes.array
};

export default Frame;
