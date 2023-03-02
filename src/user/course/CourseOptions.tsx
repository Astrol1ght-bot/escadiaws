import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Button as AddButton,
    Flashbar,
    SpaceBetween,
} from '@cloudscape-design/components';
import { Button, StepperField } from '@aws-amplify/ui-react';
import { useCart } from 'react-use-cart';
import { Course } from '@api-types';

type Props = {
    course: Course;
};


const OptionButton = styled(Button)`
  width: 40px;
  height: 40px;
`;

export const ProductOptionsList: React.FC<Props> = ({ course }) => {
    const { addItem, inCart } = useCart();

    const [quantity, setQuantity] = useState<number>(1);

    const addToCart = () => {
        addItem(
            {
                id: course.id,
                price: course.price,
                courseId: course.id,
                courseName: course.name,
                courseThumbnail: course.thumbnail,
                quantity: quantity,
                total: quantity * course.price
            }
        )
    }

    const [itemOnCart, setItemOnCart] = useState([
        {
            dismissible: true,
            onDismiss: () => setItemOnCart([]),
            content: <>This item is already in your cart</>,
        },
    ]);

    return (
        <>
            <h2>{course.name}</h2>

            {inCart(course.id) && (
                <Flashbar items={itemOnCart} />
            )}
            <SpaceBetween direction="vertical" size="m">
                <StepperField
                    max={1}
                    min={1}
                    step={1}
                    label="Chose quantity"
                    defaultValue={1}
                    onStepChange={setQuantity}
                />
                <AddButton
                    iconAlign="right"
                    iconName="add-plus"
                    onClick={addToCart}
                    variant="primary"
                >
                    Add to cart
                </AddButton>
            </SpaceBetween>
        </>
    );
};
