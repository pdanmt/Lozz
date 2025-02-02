import { Slider, SliderFilledTrack, SliderProps, SliderThumb, SliderTrack } from "@chakra-ui/react";

export function SliderMusicControl({ ...props }: SliderProps) {
    return (
        <Slider defaultValue={0} {...props}>
            <SliderTrack bg='gray.400'>
                <SliderFilledTrack bg='gray.300' />
            </SliderTrack>
            <SliderThumb
                bg='gray.300'
                w={['7px', '7px', '8px', '10px']}
                h={['7px', '7px', '8px', '10px']}
                outline='7px solid'
                outlineColor='outlineThumb'
            />
        </Slider>
    )
}